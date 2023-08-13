import { Web3Button, Web3NetworkSwitch } from '@web3modal/react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <Web3Button icon="show" label="Connect Wallet" balance="show" />
        <br />

        <Web3NetworkSwitch />
        <br />
      </div>
    </main>
  );
}
