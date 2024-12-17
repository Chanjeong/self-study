import React from 'react';
import ProductsTable from './ProductsTable';

export default function StoreTable(props) {
    //props.products, props.filter
    const { products, filter } = props;

    //products에 filter.text가 있으면 -> 그 친구만 렌더링 해야합니다.
    const targetProduct = products.filter((p) => p.name === filter.text);
    const filteredProducts = targetProduct.length > 0 ? targetProduct : products;

    const result = filteredProducts.reduce((acc, cur) => {
        if (acc.hasOwnProperty(cur.category)) {
            return {
                ...acc,
                [cur.category]: [...acc[cur.category], cur],
            };
        } else {
            return {
                ...acc,
                [cur.category]: [cur],
            };
        }
    }, {});

    console.log(result);

    const keys = Object.keys(result);
    return (
        <table>
            <thead>
                <tr style={{ fontWeight: 'bold' }}>
                    <td>Name</td>
                    <td>Price</td>
                </tr>
            </thead>
            <tbody>
                {keys.map((key, idx) => (
                    <ProductsTable category={key} items={result[key]} key={idx} inStockOnly={filter.inStockOnly} />
                ))}
            </tbody>
        </table>
    );
}
