import { StarFilled } from "@ant-design/icons";
import { Badge, Card, Image, Rate } from "antd";
import { useState } from "react";
import SingleProduct from "./SingleProduct";

export default function ({ data, grid }) {
    const [details, setDetails] = useState()

    return (
        <>
            {
                grid
                    ? <div style={{ maxWidth: "400px", width: "100%" }}>
                        {/* this ribbon use for show product is or not  */}
                        <Badge.Ribbon text="Out Of Stock" color="red" style={data.id != 3 ? { display: "none" } : {}}>
                            <Card
                                size='small'
                                hoverable >
                                <div onClick={() => setDetails(data)} style={{ display: "flex", gap: "15px", flexDirection: "column" }}>

                                    <div style={{ background: `url(${data.image})`, width: "100%", height: "150px", backgroundSize: "cover", backgroundPosition: "center" }}></div>
                                    <div>
                                        <div style={{ justifyContent: "space-between", display: "flex", width: "100%" }}>
                                            <b>₹{data.price}</b>
                                            <span> {data.rating.rate} <StarFilled style={{color:"rgb(190, 180, 70)"}}/> {data.rating.count}</span>
                                        </div>
                                        <b> {data.title.substring(0,20)}... </b>
                                    </div>
                                </div>
                            </Card>
                        </Badge.Ribbon>
                    </div>

                    // other wise list layout 
                    : <div style={{ width: "100%" }}>
                        <Badge.Ribbon text="Out Of Stock" color="red" style={data.id != 3 ? { display: "none" } : {}}>
                            <Card hoverable size='small' key={data._id} >
                                <div onClick={() => setDetails(data)} style={{ display: "flex", gap: "15px" }}>
                                    <Image height={70} width={70} src={data?.image} />
                                    <div style={{ width: "100%", display: "flex", gap: "10px", flexDirection: "column" }}>
                                        <span>{data.title}</span>
                                        <div style={{ justifyContent: "space-between", display: "flex", width: "100%" }}>
                                            <b>₹{data.price}</b>
                                            <span> <Rate style={{ fontSize: "15px" }} disabled defaultValue={data.rating.rate} /> {data.rating.count}</span>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </Badge.Ribbon>
                    </div>
            }

            {details && <SingleProduct data={data} handleClose={() => setDetails()} />}

        </>
    )
}