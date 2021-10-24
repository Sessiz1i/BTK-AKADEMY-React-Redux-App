// TODO - REDUCERS İÇİN STOR CONFİGİRASYON OLUŞTURMA
import {createStore} from "redux";
import reducers from "./index";

export default function configureStore(){
    return createStore(reducers)
}
