import { Route, Switch } from 'react-router-dom';
import './scss/App.scss';

// Views
import Home from './views/Home';
import TambahProduk from './views/TambahProduk';
import EditProduk from './views/EditProduk';
import DeleteProduk from './views/DeleteProduk';

const App = (props) => {
    return (
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="/produk/add">
                <TambahProduk/>
            </Route>
            <Route path="/produk/:id/edit">
                <EditProduk/>
            </Route>
            <Route path="/produk/:id/delete">
                <DeleteProduk/>
            </Route>
        </Switch>
    )
}

export default App;
