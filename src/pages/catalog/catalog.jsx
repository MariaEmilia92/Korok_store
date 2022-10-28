import { products, categories } from './products';
import { Button, Grid, Typography } from "@mui/material";
import './catalog.css';
import { Link } from "react-router-dom";
import Carousel from 'nuka-carousel';


<div style={{ width: "100%", margin: "auto"}}>
<Carousel style={{margin:"auto", padding: "auto"}}>
<img style={{ width: "100%"}} src="../img/carousel/carou_3.png" />
<img style={{ width: "100%"}} src="../img/carousel/carou_2.png" />
<img style={{ width: "100%"}} src="../img/carousel/carou_1.png" />
</Carousel>
</div>
const Catalog = () => {
    return <Grid container spacing={4} sx={{
        marginTop: '40px',
        paddingLeft: '32px',
        paddingRight: '32px',
        boxSizing: 'border-box'
    }}>
        {
            Object.keys(products).map(id => {
                return <Grid item xs={12} sm={6} md={4} lg={3} className="catalog-item">
                    <span className="badge-item">10%</span>
                    <img src={products[id].images[0]} alt=""/>

                    {
                        products[id].categories.map(categoryId => {
                            return <span className='category-label'>{categories[categoryId].name}</span>
                        })
                    }

                    <Typography variant="h5" component="h2">{products[id].name}</Typography>

                    {
                      products[id].promo_price ? <Typography variant="p" component="p" className="promo_price">{products[id].promo_price}</Typography> : ""
                    }
                    <Typography variant="p" component="p" className="price" style={{
                        fontSize: products[id].promo_price ? '16px' : '20px',
                        color: products[id].promo_price ? '#a9a9a9' : '#333333',
                        textDecoration: products[id].promo_price ? 'line-through' : 'none',
                    }}>{products[id].price}</Typography>

                    <Typography variant="p" component="p">{products[id].description.substring(0, 100)}...</Typography>
                    <Link to={"../product/" + id}>
                        <Button fullWidth variant="contained" style={{
                                    backgroundColor:'green',
                                }}>
                            Ver Produto
                        </Button>
                    </Link>
                </Grid>
            })
        }
    </Grid>
}

export default Catalog;