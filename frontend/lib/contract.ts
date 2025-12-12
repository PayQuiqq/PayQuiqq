// PayQuiq Contract Configuration
import PayQuiqAbi from './abi/PayQuiq.json';
import type { Abi } from 'viem';

// PayQuiq Contract address
export const PayQuiq_CONTRACT_ADDRESS = '0x1be4B9D2322Af38e9f7f1496eBa46b7Cd31d3b51' as const;

export const PayQuiq_ABI = PayQuiqAbi as Abi;

// Network Configuration
export const LISK_SEPOLIA = {
  id: 4202,
  name: 'Lisk Sepolia Testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'ETH',
    symbol: 'ETH',
  },
  rpcUrls: {
    public: { http: [
      // Prefer env-provided RPC to avoid public rate limits
      (process.env.NEXT_PUBLIC_LISK_SEPOLIA_RPC_URL as string) || 'https://rpc.sepolia-api.lisk.com'
    ] },
    default: { http: [
      (process.env.NEXT_PUBLIC_LISK_SEPOLIA_RPC_URL as string) || 'https://rpc.sepolia-api.lisk.com'
    ] },
  },
  blockExplorers: {
    default: { name: 'Blockscout', url: 'https://sepolia-blockscout.lisk.com' },
  },
} as const;

// ERC20 Token addresses (Lisk Sepolia)
export const TOKENS = {
  USDC: '0xC4Bb350f7a4d17cc9D5557c4364F5c676Bd4Fa0D', // MockUSDC
  USDT: '0x8dA801bEb2BCAD9AA44Dc2B029fE680796aa3faf', // MockUSDT
  WETH: '0x80e81201b63d6958c6f1977B0e1d52064B260750', // MockWETH
} as const;
