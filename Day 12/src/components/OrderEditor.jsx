import { useState, useRef } from 'react';

const OrderEditor = () => {
  const [order, setOrder] = useState({
    menu: '',
    address: '',
    request: '',
  });
  const menuRef = useRef();
  const addressRef = useRef();
  const requestRef = useRef();

  const onChange = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (addressRef.current.value === '') {
      addressRef.current.focus();
    } else {
      alert(
        `주문이 완료되었습니다. 메뉴:${order.menu}, 주소: ${order.address}, 요청사항: ${order.request}`,
      );
      setOrder({ menu: '', address: '', request: '' });
      menuRef.current.value = '';
      addressRef.current.value = '';
      requestRef.current.value = '';
    }
  };

  return (
    <div class="orderEditor">
      <h2>배달의민족 주문</h2>
      <form onSubmit={onSubmit}>
        <div>
          <p>메뉴 선택</p>
          <select
            style={{ width: 300, padding: 5, boxSizing: 'border-box' }}
            onChange={onChange}
            name="menu"
            value={order.menu}
            ref={menuRef}
          >
            <option value={''} disabled>
              -- 메뉴를 선택하세요 --
            </option>
            <option value={'족발'}>족발</option>
            <option value={'떡볶이'}>떡볶이</option>
            <option value={'아이스크림'}>아이스크림</option>
            <option value={'샐러드'}>샐러드</option>
          </select>
        </div>
        <div>
          <p>배달 주소</p>
          <input
            style={{ width: 300, padding: 5, boxSizing: 'border-box' }}
            placeholder="예) 서울특별시 xx동 .."
            onChange={onChange}
            ref={addressRef}
            name="address"
            value={order.address}
          />
        </div>
        <div>
          <p>배달 요청사항</p>
          <textarea
            style={{ width: 300, padding: 5, boxSizing: 'border-box' }}
            placeholder="배달 요청사항을 써 주세요 .."
            onChange={onChange}
            name="request"
            ref={requestRef}
            value={order.request}
          />
        </div>
        <div>
          <button
            type="submit"
            style={{ width: 300, padding: 5, boxSizing: 'border-box' }}
          >
            주문 완료
          </button>
        </div>
      </form>
    </div>
  );
};

export default OrderEditor;
