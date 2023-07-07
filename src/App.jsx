import React, { useEffect, useState } from 'react'
import { Button, Checkbox, Empty, Radio, Spin } from 'antd';
import ProductCard from './component/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { FetchProduct } from './redux/slice/product';
import { AppstoreOutlined, BarsOutlined, FilterOutlined, PushpinTwoTone } from '@ant-design/icons';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';

function App() {
  const dispatch = useDispatch()
  const { loading, product } = useSelector(state => state.product)
  const [filter, setFilter] = useState("All")
  const [grid, setGrid] = useState(true)

  useEffect(() => {
    dispatch(FetchProduct())
  }, [])


  const items = [
    {
      key: '1',
      label: (
        <Button type="text" onClick={() => setFilter("All")}>
          All
        </Button>
      ),
    },
    {
      key: '2',
      label: (
        <Button type="text" onClick={() => setFilter("electronics")}>
          Electronics
        </Button>
      )
    },
    {
      key: '3',
      label: (
        <Button type="text" onClick={() => setFilter("jewelery")}>
          Jewelery
        </Button>
      ),
    },
    {
      key: '4',
      label: (
        <Button type="text" onClick={() => setFilter("men's clothing")}>
          Men's clothing
        </Button>
      ),
    },
    {
      key: '5',
      label: (
        <Button type="text" onClick={() => setFilter("women's clothing")}>
          Women's clothing
        </Button>
      ),
    },
  ];

  return (
    <div style={{ maxWidth: "1200px", margin: "auto", padding: "0 5%" }}>

      <div style={{ display: "flex", flexDirection: "column", gap: "10px", padding: "15px 0", alignItems: "start", position: "sticky", top: 0, background: "white", zIndex: 999 }}>
        <div style={{ width: "100%" }}>

          <div style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>

            {/* this is category filter  */}
            <Dropdown
              menu={{
                items,
              }}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Button type={filter === "All" ? "default" : "primary"}>
                  Category
                  <FilterOutlined />
                </Button>
              </a>
            </Dropdown>

            {/* this for product design will shown grid or table form  */}
            <Radio.Group optionType='button' defaultValue={1}>
              <Radio onChange={() => setGrid(true)} value={1}><AppstoreOutlined /></Radio>
              <Radio onChange={() => setGrid(false)} value={2}><BarsOutlined /></Radio>
            </Radio.Group>

          </div>

        </div>
      </div>


      {/* product fetching  */}
      <div className='product-card' style={grid ? {} : { display: "flex", gap: 20, flexDirection: "column" }} >
        {
          product ? product?.filter(e => e.category === filter || filter === "All" && e).map((e, i) => (
            <ProductCard key={i} data={e} grid={grid} />
          )) : <Spin spinning={loading} tip="Loading...">
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
          </Spin>

        }
      </div> <br />
    </div>
  )
}

export default App