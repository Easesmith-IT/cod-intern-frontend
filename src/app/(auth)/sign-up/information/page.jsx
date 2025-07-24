import { Stepper } from '@/components/login-signup/signup-steps/stepper';
import React from 'react'

const Information = () => {
  return (
    <div>
      <div className="flex justify-center items-center mt-14">d</div>
      <Stepper
        steps={[
          { id: 1, completed: true },
          { id: 2, completed: false },
          { id: 3, completed: false },
          { id: 4, completed: false },
        ]}
        currentStep={2}
        className="py-4"
      />
    </div>
  );
}

export default Information
