import React from 'react';

function WasteManagementComponent() {
  return (
    <div className="  p-4 md:p-8 lg:p-12">
      <h2 className="text-3xl mt-11 font-bold mb-4">Waste Management</h2>
      <div className="space-y-4">
      <p className="text-xl  font-semibold">Step 1: Reduce</p>
      <p className='mt-4 text-lg shadow-lg'>
            The first and most important step in waste management is to reduce waste at its source. 
            This can be achieved by:
          </p>
        <div className=" mt-8 mb-4 ml-24 ">
          {/* <p className="text-xl  font-semibold">Step 1: Reduce</p> */}
          {/* <p className='mt-4 text-lg'>
            The first and most important step in waste management is to reduce waste at its source. 
            This can be achieved by:
          </p> */}
          <ul className="list-disc list-inside">
            <li>Using reusable products instead of disposable ones.</li>
            <li>Buying products with minimal packaging.</li>
            <li>Avoiding single-use plastics.</li>
            <li>Being mindful of food waste and only purchasing what you can consume.</li>
          </ul>
        </div>
        
        <div className="mb-4">
          <p className="text-xl font-semibold">Step 2: Reuse</p>
          <p>
            Reusing items is another effective way to control waste. Instead of throwing things away after a single use, 
            consider:
          </p>
          <ul className="list-disc list-inside">
            <li>Repairing items when they break instead of replacing them.</li>
            <li>Donating or selling items you no longer need.</li>
            <li>Using containers and bags that can be reused for shopping and storage.</li>
          </ul>
        </div>
        <div className="mb-4">
          <p className="text-xl font-semibold">Step 2: Reuse</p>
          <p>
            Reusing items is another effective way to control waste. Instead of throwing things away after a single use, 
            consider:
          </p>
          <ul className="list-disc list-inside">
            <li>Repairing items when they break instead of replacing them.</li>
            <li>Donating or selling items you no longer need.</li>
            <li>Using containers and bags that can be reused for shopping and storage.</li>
          </ul>
        </div>
        <div className="mb-4">
          <p className="text-xl font-semibold">Step 2: Reuse</p>
          <p>
            Reusing items is another effective way to control waste. Instead of throwing things away after a single use, 
            consider:
          </p>
          <ul className="list-disc list-inside">
            <li>Repairing items when they break instead of replacing them.</li>
            <li>Donating or selling items you no longer need.</li>
            <li>Using containers and bags that can be reused for shopping and storage.</li>
          </ul>
        </div>

    
        
      </div>
    </div>
  );
}

export default WasteManagementComponent;
