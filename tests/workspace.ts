import * as anchor from "@project-serum/anchor";
import { chaiSolana } from "@saberhq/chai-solana";
import { SolanaProvider } from "@saberhq/solana-contrib";
import chai from "chai";

import { Arrow } from "../src";

chai.use(chaiSolana);

const anchorProvider = anchor.Provider.env();
anchor.setProvider(anchorProvider);

const provider = SolanaProvider.load({
  connection: anchorProvider.connection,
  wallet: anchorProvider.wallet,
  opts: anchorProvider.opts,
});

export const makeSDK = (): Arrow => {
  return Arrow.init(provider);
};
