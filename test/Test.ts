import assert from "assert";
import { TestHelpers, SynthetixDeposit_Approval } from "generated";
const { MockDb, SynthetixDeposit } = TestHelpers;

describe("SynthetixDeposit contract Approval event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for SynthetixDeposit contract Approval event
  const event = SynthetixDeposit.Approval.createMockEvent({
    /* It mocks event fields with default values. You can overwrite them if you need */
  });

  it("SynthetixDeposit_Approval is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await SynthetixDeposit.Approval.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualSynthetixDepositApproval =
      mockDbUpdated.entities.SynthetixDeposit_Approval.get(
        `${event.chainId}_${event.block.number}_${event.logIndex}`
      );

    // Creating the expected entity
    const expectedSynthetixDepositApproval: SynthetixDeposit_Approval = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      owner: event.params.owner,
      spender: event.params.spender,
      value: event.params.value,
      timestamp: BigInt(event.block.timestamp),
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(
      actualSynthetixDepositApproval,
      expectedSynthetixDepositApproval,
      "Actual SynthetixDepositApproval should be the same as the expectedSynthetixDepositApproval"
    );
  });
});
