import { useState } from 'react';

const OrderEditor = () => {
  const [menu, setMenu] = useState('');
  const [address, setAddress] = useState('');
  const [request, setRequest] = useState('');

  const onChangeMenu = (e) => {
    setMenu(e.target.value);
  };

  const onChangeAddress = (e) => {
    setAddress(e.target.value);
  };

  const onChangeRequest = (e) => {
    setRequest(e.target.value);
  };

  const onSubmit = (e) => {
    if (menu && address) {
      alert(
        `주문이 완료되었습니다. 메뉴:${menu}, 주소: ${address}, 요청사항: ${request}`,
      );
      setMenu('');
      setAddress('');
      setRequest('');
    } else {
      alert('필수 항목을 입력해주세요.');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <h2>배달의민족 주문</h2>
      <div>
        <div style={{ marginBottom: 5, fontSize: 14 }}>메뉴 선택</div>
        <select
          style={{ width: 300, padding: 5, boxSizing: 'border-box' }}
          onChange={onChangeMenu}
        >
          <option value={''} disabled selected>
            -- 메뉴를 선택하세요 --
          </option>
          <option value={'족발'}>족발</option>
          <option value={'떡볶이'}>떡볶이</option>
          <option value={'아이스크림'}>아이스크림</option>
          <option value={'샐러드'}>샐러드</option>
        </select>
      </div>
      <div>
        <div style={{ marginBottom: 5, fontSize: 14 }}>배달 주소</div>
        <input
          style={{ width: 300, padding: 5, boxSizing: 'border-box' }}
          placeholder="예) 서울특별시 xx동 .."
          onChange={onChangeAddress}
        />
      </div>
      <div>
        <div style={{ marginBottom: 5, fontSize: 14 }}>배달 요청사항</div>
        <textarea
          style={{ width: 300, padding: 5, boxSizing: 'border-box' }}
          placeholder="배달 요청사항을 써 주세요 .."
          onChange={onChangeRequest}
        />
      </div>
      <div>
        <button
          onClick={onSubmit}
          style={{ width: 300, padding: 5, boxSizing: 'border-box' }}
        >
          주문 완료
        </button>
      </div>
    </div>
  );
};

export default OrderEditor;