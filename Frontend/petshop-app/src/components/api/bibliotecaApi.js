import BaseApi from './BaseApi';

class bibliotecaApi extends BaseApi {

    getBooks(setData){
        const method = "GET";
        const url = `${this.baseUrl}api/v1/book`;
        console.log(url);
        super.myFetch(setData, method, url);
    }

    getBookByText(setData, searchText){
        const method = "GET";
        const url = `${this.baseUrl}api/v1/book/searchText/${searchText}`;
        console.log(url);
        super.myFetch(setData, method, url);
    }

    getBook(setData, id){
        const method = "GET";
        const url = `${this.baseUrl}api/v1/book/${id}`;
        console.log(url);
        super.myFetch(setData, method, url);
    }

    incluirBook(book){
        const method = "POST";
        const url = `${this.baseUrl}api/v1/book`;
        console.log(url);
        super.myFetch({}, method, url, book);
    }

    alterarBook(book){
        const method = "PUT";
        const url = `${this.baseUrl}api/v1/book/${book.id}`;
        console.log(url);
        super.myFetch({}, method, url, book);
    }

    excluir(id){
        const method = "DELETE";
        const url = `${this.baseUrl}api/v1/book/${id}`;
        console.log(url);
        super.myFetch({}, method, url);
    }

}

export default bibliotecaApi;