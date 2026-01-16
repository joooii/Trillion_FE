'use client';

import { useState } from 'react';
import Checkbox from '@/components/common/CheckBox';

export default function LoginCheck() {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="p-6">
      <Checkbox
        checked={agreed}
        onChange={setAgreed}
        label="동의합니다"
      />
    </div>
  );
}