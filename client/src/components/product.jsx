import React, { useEffect } from 'react'
import "../css/product.css"

export default function Product ( {prod , prod_image, product} ) {

    useEffect(()=>{
    },[prod , prod_image, product])

    return (
        <>
            <div className="product mb-5 d-flex">
                <div className="pleft d-flex justify-content-center align-prods-center">
                    {/* <img src="/porsche-model.png" alt="image" /> */}
                    <img src={`/images/${ prod_image? prod_image.images :""}`} alt={product.product} />
                </div>
                <div className="pright d-flex p-5 flex-column justify-content-center">
                    <div className="pright-head text-center">
                        {prod ? prod.prod_name : "name"}
                    </div>

                    {product.product.toLowerCase() === "cement" ?
                        <div className="pright-body py-4">
                            <div className='d-flex justify-content-between mb-2 mx-3'>
                                <div>quantity</div>
                                <div>{prod ? prod.quantity : "-"}</div>
                            </div>
                            <div className='d-flex justify-content-between mb-2 mx-3'>
                                <div>Type</div>
                                <div>{prod ? prod.type : "-"}</div>
                            </div>
                            <div className='d-flex justify-content-between mb-2 mx-3'>
                                <div>Brand</div>
                                <div>{prod ? prod.quantity : "-"}</div>
                            </div>
                        </div>: ""
                    }

                    {product.product.toLowerCase() === "aggregate" ?
                        <div className="pright-body py-4">
                            <div className='d-flex justify-content-between mb-2 mx-3'>
                                <div>quality</div>
                                <div>{prod ? prod.quality : "-"}</div>
                            </div>
                            <div className='d-flex justify-content-between mb-2 mx-3'>
                                <div>Size</div>
                                <div>{prod ? prod.size : "-"}</div>
                            </div>
                            <div className='d-flex justify-content-between mb-2 mx-3'>
                                <div>Brand</div>
                                <div>{prod ? prod.brand : "-"}</div>
                            </div>
                        </div>: ""
                    }

                    {product.product.toLowerCase() === "bricks & blocks" ?
                        <div className="pright-body py-4">
                            <div className='d-flex justify-content-between mb-2 mx-3'>
                                <div>Brand</div>
                                <div>{prod ? prod.brand : "-"}</div>
                            </div>
                            <div className='d-flex justify-content-between mb-2 mx-3'>
                                <div>Thickness</div>
                                <div>{prod ? prod.thickness : "-"}</div>
                            </div>
                            <div className='d-flex justify-content-between mb-2 mx-3'>
                                <div>Minimum order</div>
                                <div>{prod ? prod.minimum_order : "-"}</div>
                            </div>
                        </div>: ""
                    }

                    {product.product.toLowerCase().toLowerCase() === "stone dust" ?
                        <div className="pright-body py-4">
                            <div className='d-flex justify-content-between mb-2 mx-3'>
                                <div>quality</div>
                                <div>{prod ? prod.quality : "-"}</div>
                            </div>
                            <div className='d-flex justify-content-between mb-2 mx-3'>
                                <div>Source</div>
                                <div>{prod ? prod.source : "-"}</div>
                            </div>
                            <div className='d-flex justify-content-between mb-2 mx-3'>
                                <div>Price</div>
                                <div>{prod ? prod.price : "-"}</div>
                            </div>
                        </div>: ""
                    }

                    {product.product.toLowerCase() === "steel-tmt bars" ?
                        <div className="pright-body py-4">
                            <div className='d-flex justify-content-between mb-2 mx-3'>
                                <div>Size</div>
                                <div>{prod ? prod.size : "-"}</div>
                            </div>
                            <div className='d-flex justify-content-between mb-2 mx-3'>
                                <div>Company</div>
                                <div>{prod ? prod.company : "-"}</div>
                            </div>
                            <div className='d-flex justify-content-between mb-2 mx-3'>
                                <div>Price</div>
                                <div>{prod ? prod.price : "-"}</div>
                            </div>
                        </div>: ""
                    }

                    {product.product.toLowerCase() === "jamuna dust" ?
                        <div className="pright-body py-4">
                            <div className='d-flex justify-content-between mb-2 mx-3'>
                                <div>quality</div>
                                <div>{prod ? prod.quantity : "-"}</div>
                            </div>
                            <div className='d-flex justify-content-between mb-2 mx-3'>
                                <div>Size</div>
                                <div>{prod ? prod.quantity : "-"}</div>
                            </div>
                            <div className='d-flex justify-content-between mb-2 mx-3'>
                                <div>Brand</div>
                                <div>{prod ? prod.quantity : "-"}</div>
                            </div>
                        </div>: ""
                    }

                    {product.product.toLowerCase() === "interlocking tiles" ?
                        <div className="pright-body py-4">
                            <div className='d-flex justify-content-between mb-2 mx-3'>
                                <div>quality</div>
                                <div>{prod ? prod.quantity : "-"}</div>
                            </div>
                            <div className='d-flex justify-content-between mb-2 mx-3'>
                                <div>Size</div>
                                <div>{prod ? prod.quantity : "-"}</div>
                            </div>
                            <div className='d-flex justify-content-between mb-2 mx-3'>
                                <div>Brand</div>
                                <div>{prod ? prod.quantity : "-"}</div>
                            </div>
                        </div>: ""
                    }

                    <div className="pright-foot d-flex justify-content-between">
                        <div className="contact-1 me-5 d-flex justify-content-center">
                            <div className="call-icon contact-icons">
                                <i className="fa-solid fa-phone-volume"></i>
                            </div>
                            <div className="contact-text ms-2 ">
                                <a className='text-left' href="tel:+919911897526">
                                    +919911897526
                                </a>
                            </div>
                        </div>
                        <div className="contact-2 d-flex justify-content-center">
                            <div className="call-icon contact-icons">
                                <i className="fa-solid fa-phone-volume"></i>
                            </div>
                            <div className="contact-text ms-2 ">
                                <a className='text-left' href="tel:+918447637436">
                                +918447637436
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
