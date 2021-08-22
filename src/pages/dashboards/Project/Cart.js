// flow
import React, { Component } from 'react';
import { Row, Col, Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';

import PageTitle from '../../../components/PageTitle';

import productImg1 from '../../../assets/images/products/product-5.jpg';
import productImg2 from '../../../assets/images/products/product-1.jpg';
import productImg3 from '../../../assets/images/products/product-3.jpg';
import productImg4 from '../../../assets/images/products/product-2.jpg';

// summary
const CartSummary = props => {
    const summary = props.summary || {};

    return (
        <React.Fragment>
            <div className="border p-3 mt-4 mt-lg-0 rounded">
                <h4 className="header-title mb-3">계산서</h4>

                <div className="table-responsive">
                    <table className="table mb-0">
                        <tbody>
                            <tr>
                                <td>총 금액 :</td>
                                <td>9900원</td>
                            </tr>
                            <tr>
                                <td>포인트 할인 금액 : </td>
                                <td>-1000원</td>
                            </tr>
                            <tr>
                                <td>배달 금액 :</td>
                                <td>2000원</td>
                            </tr>
                            <tr>
                                <th>결제 금액 :</th>
                                <th>10900원</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="input-group mt-3">
            </div>
        </React.Fragment>
    );
};

// Cart
class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 1,
                    image: productImg2,
                    name: '거창 꿀사과',
                    size: '거창군',
                    color: '과일꾼',
                    price: 9900,
                    qty: 1,
                    total: 9900,
                },
                {
                    id: 2,
                    image: productImg4,
                    name: '단양 어상천수박',
                    size: '단양군',
                    color: '곰곰',
                    price: 25390,
                    qty: 0,
                    total: 0
                },
                {
                    id: 3,
                    image: productImg3,
                    name: '털 복숭아',
                    size: '경상북도',
                    color: '보배농장',
                    price: 28900,
                    qty: 0,
                    total: 0,
                },
                {
                    id: 4,
                    image: productImg1,
                    name: '포도',
                    size: '김천시',
                    color: '페르메',
                    price: 18900,
                    qty: 0,
                    total: 0,
                },
            ],
            summary: {
                gross_total: 1571.19,
                discount: 157.11,
                shipping_charge: 25,
                tax: 19.22,
                net_total: 1458.3,
            },
        };

        this.onQtyChange = this.onQtyChange.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }

    /**
     * On quantity changed
     */
    onQtyChange = (e, item) => {
        var items = [...this.state.items];
        var idx = items.findIndex(i => i.id === item.id);
        var newQty = e.target.value;
        var newTotal = items[idx].price * newQty;
        items[idx] = { ...item, qty: newQty, total: newTotal };
        this._adjustCart(items);
    };

    /**
     * Removes item from cart
     */
    removeItem = (e, item) => {
        e.preventDefault();
        var items = this.state.items.filter(i => i.id !== item.id);
        this._adjustCart(items);
    };

    /**
     * Adjust the cart
     */
    _adjustCart = items => {
        var newGrossTotal = 0;
        for (const item of items) {
            newGrossTotal += item.total;
        }
        var newNetTotel =
            newGrossTotal - this.state.summary.discount + this.state.summary.shipping_charge + this.state.summary.tax;
        this.setState({
            items: items,
            summary: { ...this.state.summary, gross_total: newGrossTotal, net_total: newNetTotel },
        });
    };

    render() {
        return (
            <React.Fragment>
                <PageTitle
                    breadCrumbItems={[
                        { label: 'eCommerce', path: '/apps/ecommerce/shopping-cart' },
                        { label: 'Cart', path: '/apps/ecommerce/shopping-cart', active: true },
                    ]}
                    title={'Shopping Cart'}
                />

                <Row>
                    <Col>
                        <Card>
                            <CardBody>
                                <Row>
                                    <Col lg={8}>
                                        <div className="table-responsive">
                                            <table className="table table-borderless table-centered mb-0">
                                                <thead className="thead-light">
                                                    <tr>
                                                        <th>상품</th>
                                                        <th>가격</th>
                                                        <th>개수</th>
                                                        <th>총 가격</th>
                                                        <th style={{ width: '50px' }}></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {this.state.items.map((item, idx) => {
                                                        return (
                                                            <tr key={idx}>
                                                                <td>
                                                                    <img
                                                                        src={item.image}
                                                                        alt={item.name}
                                                                        title="contact-img"
                                                                        className="rounded mr-3"
                                                                        height="64"
                                                                    />

                                                                    <p className="m-0 d-inline-block align-middle font-16">
                                                                        <Link to="/" className="text-body">
                                                                            {item.name}
                                                                        </Link>
                                                                        <br />
                                                                        <small className="mr-2">
                                                                            <b>원산지:</b> {item.size}{' '}
                                                                        </small>
                                                                        <small>
                                                                            <b>판매처:</b> {item.color}{' '}
                                                                        </small>
                                                                    </p>
                                                                </td>
                                                                <td>{item.price.toFixed(2)}원</td>
                                                                <td>
                                                                    <input
                                                                        type="number"
                                                                        min="1"
                                                                        value={item.qty}
                                                                        className="form-control"
                                                                        placeholder="Qty"
                                                                        style={{ width: '90px' }}
                                                                        onChange={e => {
                                                                            this.onQtyChange(e, item);
                                                                        }}
                                                                    />
                                                                </td>
                                                                <td>{item.total.toFixed(2)}원</td>
                                                                <td>
                                                                    <Link
                                                                        to="/"
                                                                        className="action-icon"
                                                                        onClick={e => {
                                                                            this.removeItem(e, item);
                                                                        }}>
                                                                        {' '}
                                                                        <i className="mdi mdi-delete"></i>
                                                                    </Link>
                                                                </td>
                                                            </tr>
                                                        );
                                                    })}
                                                </tbody>
                                            </table>
                                        </div>
                                        <Row className="mt-4">
                                            <Col sm={6}>
                                            </Col>
                                            <Col sm={6}>
                                                <div className="text-sm-right">
                                                    <a href="/" className="btn btn-danger">
                                                        <i className="mdi mdi-cart-plus mr-1"></i> Checkout{' '}
                                                    </a>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Col>

                                    <Col lg={4}>
                                        <CartSummary summary={this.state.summary} />
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default Cart;
