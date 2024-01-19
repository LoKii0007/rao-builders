import React, { useEffect } from 'react'
import "../css/product.css"

export default function Product ( {prod , prod_image, product} ) {

    useEffect(()=>{
        console.log(product)
        console.log(prod)
        console.log(prod_image)
    },[prod , prod_image, product])

    return (
        <>
            <div className="product mb-5 d-flex">
                <div className="pleft d-flex justify-content-center align-prods-center">
                    {/* <img src="/porsche-model.png" alt="image" /> */}
                    <img src={`../../client/public/images/${prod_image}`} alt="image" />
                </div>
                <div className="pright d-flex p-5 flex-column justify-content-center">
                    <div className="pright-head text-center">
                        {prod.prod_name}
                    </div>

                    {product.product === "Cement" ?
                        <div className="pright-body py-4">
                            <div className='d-flex justify-content-between mb-2 mx-3'>
                                <div>quantity</div>
                                <div>{prod.quantity}</div>
                            </div>
                            <div className='d-flex justify-content-between mb-2 mx-3'>
                                <div>Type</div>
                                <div>{prod.type}</div>
                            </div>
                            <div className='d-flex justify-content-between mb-2 mx-3'>
                                <div>Brand</div>
                                <div>{prod.brand}</div>
                            </div>
                        </div>: ""
                    }

                    {product.product === "aggregate" ?
                        <div className="pright-body py-4">
                            <div className='d-flex justify-content-between mb-2 mx-3'>
                                <div>quality</div>
                                <div>sjdcb</div>
                            </div>
                            <div className='d-flex justify-content-between mb-2 mx-3'>
                                <div>Size</div>
                                <div>jsdcb</div>
                            </div>
                            <div className='d-flex justify-content-between mb-2 mx-3'>
                                <div>Brand</div>
                                <div>skdcb</div>
                            </div>
                        </div>: ""
                    }

                    {product.product === "stone dust" ?
                        <div className="pright-body py-4">
                            <div className='d-flex justify-content-between mb-2 mx-3'>
                                <div>quality</div>
                                <div>sjdcb</div>
                            </div>
                            <div className='d-flex justify-content-between mb-2 mx-3'>
                                <div>Size</div>
                                <div>jsdcb</div>
                            </div>
                            <div className='d-flex justify-content-between mb-2 mx-3'>
                                <div>Brand</div>
                                <div>skdcb</div>
                            </div>
                        </div>: ""
                    }

                    {product.product === "steel/tmt bars" ?
                        <div className="pright-body py-4">
                            <div className='d-flex justify-content-between mb-2 mx-3'>
                                <div>quality</div>
                                <div>sjdcb</div>
                            </div>
                            <div className='d-flex justify-content-between mb-2 mx-3'>
                                <div>Size</div>
                                <div>jsdcb</div>
                            </div>
                            <div className='d-flex justify-content-between mb-2 mx-3'>
                                <div>Brand</div>
                                <div>skdcb</div>
                            </div>
                        </div>: ""
                    }

                    {product.product === "jamuna dust" ?
                        <div className="pright-body py-4">
                            <div className='d-flex justify-content-between mb-2 mx-3'>
                                <div>quality</div>
                                <div>sjdcb</div>
                            </div>
                            <div className='d-flex justify-content-between mb-2 mx-3'>
                                <div>Size</div>
                                <div>jsdcb</div>
                            </div>
                            <div className='d-flex justify-content-between mb-2 mx-3'>
                                <div>Brand</div>
                                <div>skdcb</div>
                            </div>
                        </div>: ""
                    }

                    {product.product === "interlocking tiles" ?
                        <div className="pright-body py-4">
                            <div className='d-flex justify-content-between mb-2 mx-3'>
                                <div>quality</div>
                                <div>sjdcb</div>
                            </div>
                            <div className='d-flex justify-content-between mb-2 mx-3'>
                                <div>Size</div>
                                <div>jsdcb</div>
                            </div>
                            <div className='d-flex justify-content-between mb-2 mx-3'>
                                <div>Brand</div>
                                <div>skdcb</div>
                            </div>
                        </div>: ""
                    }

                    <div className="pright-foot d-flex justify-content-between">
                        <div className="contact-1 me-5 d-flex justify-content-center">
                            <div className="call-icon contact-icons">
                                <i class="fa-solid fa-phone-volume"></i>
                            </div>
                            <div className="contact-text ms-2 ">
                                <a className='text-left' href="tel:+919560003717">
                                    +9195600 03717
                                </a>
                            </div>
                        </div>
                        <div className="contact-2 d-flex justify-content-center">
                            <div className="call-icon contact-icons">
                                <i class="fa-solid fa-phone-volume"></i>
                            </div>
                            <div className="contact-text ms-2 ">
                                <a className='text-left' href="tel:+919560003717">
                                    +9195600 03717
                                </a>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}
