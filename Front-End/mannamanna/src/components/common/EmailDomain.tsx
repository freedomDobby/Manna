import React, { useState } from 'react';
import { findEmailDomainAtom, findEmailNameAtom } from '../../Recoil/State';
import { useRecoilState } from 'recoil';

const STAIComponent = () => {
  const [email, setEmail] = useRecoilState(findEmailNameAtom);
  const [selectedDomain, setSelectedDomain] = useRecoilState(findEmailDomainAtom);

  const extractEmailParts = (emailInput:any) => {
    const emailParts = emailInput.trim().split('@');
    if (emailParts.length === 2) {
      const username = emailParts[0].trim();
      const domain = emailParts[1].trim();
      return { username, domain };
    }
    return { username: '', domain: '' };
  };

  const handleCustomDomainChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log('Selected Domain:', e.target.value);
    setSelectedDomain(e.target.value);

  };

  const domainOptions = [
    'naver.com',
    'google.com',
    'hanmail.net',
    'nate.com',
    'kakao.com',
    'gmail.com',
  ];

  const { username, domain } = extractEmailParts(email);

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        fontSize: '3vh',
        width: '70vh',
        height: '7vh',
        marginLeft: '7%',
        background: '#ffcced',
        justifyContent: 'center',
      }}
    >
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="이메일 입력"
        style={{ padding: '0.5vh', marginRight: '1vh', width: '45%', fontSize: '2vh' }}
      />
      <span style={{ fontSize: '2vh', fontFamily: 'Arial' }}>@</span>
        <select
        value={selectedDomain}
        onChange={(e) => handleCustomDomainChange(e)}
        style={{ padding: '0.5vh', marginLeft: '1vh', width: '50%', fontSize: '2vh' }}
      >
        <option value="">도메인 선택</option>
        {domainOptions.map((domain) => (
          <option key={domain} value={domain}>
            {domain}
          </option>
        ))}
      </select>
    </div>
  );
};

export default STAIComponent;
