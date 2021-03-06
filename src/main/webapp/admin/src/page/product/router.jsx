import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
// 页面
import ProductList from 'page/product/index/index.jsx';

class ProductRouter extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/product/index" component={ProductList}/>
                <Redirect exact from="/product" to="/product/index"/>
            </Switch>
        );
    };
}

export default ProductRouter;