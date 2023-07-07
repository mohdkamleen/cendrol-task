import { ArrowLeftOutlined, StarFilled } from '@ant-design/icons'
import { Rate } from 'antd'
import React from 'react'
const SingleProduct = ({ data, handleClose }) => {

    return (
        <>
            <div style={{ zIndex: 999, position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "white" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 5%", height: "60px" }}>
                    <ArrowLeftOutlined style={{ fontSize: "20px", cursor: "pointer" }} onClick={handleClose} />
                    <font color="red">{data.id === 3 && "Out of stock"}</font>
                </div>
                <img style={{ display: "block", margin: "auto", padding: "15px", borderRadius: "5px", maxHeight: "200px" }} src={data.image} />

                {/* if product have multiple images */}
                <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "10px" }}>
                    <img style={{ height: "50px", border: "1px solid lightgray", padding: "5px", borderRadius: "5px" }} src={data.image} />
                    <img style={{ height: "50px", border: "1px solid lightgray", padding: "5px", borderRadius: "5px" }} src={data.image} />
                    <img style={{ height: "50px", border: "1px solid lightgray", padding: "5px", borderRadius: "5px" }} src={data.image} />
                </div>  <br />
                <div style={{ padding: "0 5%" }}>
                    <div style={{ justifyContent: "space-between", display: "flex", width: "100%",alignItems:"center" }}>
                        <b>₹{data.price}</b>
                        <span> <Rate style={{ fontSize: "15px" }} disabled defaultValue={data.rating.rate} /> {data.rating.count}</span>
                    </div> <br />
                    <b>{data.title}</b>
                    <p>{data.description.substring(0,400)}</p>

                </div>

                <br /><br />
            </div>
        </>
    )
}

export default SingleProduct