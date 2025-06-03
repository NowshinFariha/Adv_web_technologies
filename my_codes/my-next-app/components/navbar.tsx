'use client';

import Link from 'next/link';
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav style={{ padding: '1rem', background: '#eee' }}>
      <Link href="/" style={{ marginRight: '10px' }}>Home</Link>
      <Link href="/about" style={{ marginRight: '10px' }}>About</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
};

export default Navbar;
