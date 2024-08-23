import classNames from 'classnames'
import { useSelector, useDispatch } from 'react-redux'
import { clearCartList, addCount, reduceCount, setShowCartVisible } from '../../store/modules/foodsStore'
import Count from '../Count'
import './index.scss'

const Cart = () => {
  const dispatch = useDispatch()
  const { cartList, cartFlag, showCartVisible } = useSelector(state => state.foods)
  return (
    <div className="cartContainer">
      {/* 遮罩层 添加visible类名可以显示出来 */}
      <div
        className={classNames('cartOverlay', showCartVisible && 'visible')}
        onClick={ () => { dispatch(setShowCartVisible(false)) } }
      />
      <div className="cart" onClick={ () => { cartFlag && dispatch(setShowCartVisible(true)) } }>
        {/* fill 添加fill类名可以切换购物车状态*/}
        {/* 购物车数量 */}
        <div className={classNames('icon', cartFlag && 'fill')}>
          {cartFlag && <div className="cartCornerMark">{cartList.length}</div>}
        </div>
        {/* 购物车价格 */}
        <div className="main">
          <div className="price">
            <span className="payableAmount">
              <span className="payableAmountUnit">¥</span>
              {
                cartList.reduce((a, b) => {
                  console.log(a, b);
                  return Number(a) + ( b.price * b.count )
                }, 0).toFixed(2) || '0.00'
              }
            </span>
          </div>
          <span className="text">预估另需配送费 ¥5</span>
        </div>
        {/* 结算 or 起送 */}
        {cartFlag ? (
          <div className="goToPreview">去结算</div>
        ) : (
          <div className="minFee">¥20起送</div>
        )}
      </div>
      {/* 添加visible类名 div会显示出来 */}
      <div className={classNames('cartPanel', showCartVisible && 'visible')}>
        <div className="header">
          <span className="text">购物车</span>
          <span className="clearCart" onClick={ () => { dispatch(clearCartList()) } }>
            清空购物车
          </span>
        </div>

        {/* 购物车列表 */}
        <div className="scrollArea">
          {cartList.map(item => {
            return (
              <div className="cartItem" key={item.id}>
                <img className="shopPic" src={item.picture} alt="" />
                <div className="main">
                  <div className="skuInfo">
                    <div className="name">{item.name}</div>
                  </div>
                  <div className="payableAmount">
                    <span className="yuan">¥</span>
                    <span className="price">{item.price}</span>
                  </div>
                </div>
                <div className="skuBtnWrapper btnGroup">
                  <Count
                    count={item.count}
                    onPlus={() => { dispatch(addCount(item.id)) }}
                    onMinus={() => { dispatch(reduceCount(item.id)) }}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Cart
