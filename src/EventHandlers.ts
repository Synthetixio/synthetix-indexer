/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  SynthetixDeposit,
  SynthetixDeposit_Approval,
  SynthetixDeposit_Transfer,
} from "generated";

SynthetixDeposit.Approval.handler(async ({ event, context }) => {
  const entity: SynthetixDeposit_Approval = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    owner: event.params.owner,
    spender: event.params.spender,
    value: event.params.value,
    timestamp: BigInt(event.block.timestamp),
  };

  context.SynthetixDeposit_Approval.set(entity);
});

SynthetixDeposit.Transfer.handler(async ({ event, context }) => {
  const entity: SynthetixDeposit_Transfer = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    from: event.params.from,
    to: event.params.to,
    value: event.params.value,
    timestamp: BigInt(event.block.timestamp),
  };

  context.SynthetixDeposit_Transfer.set(entity);
});
