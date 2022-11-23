import { utils } from "near-api-js";
import { useNearContext } from "../context/nearContext";
import { StyledButton } from "./StyledComponents";

export default function TransactionButton({ receiver, method, args, gas, deposit, children }) {
	const { selector, modal, accounts, accountId } = useNearContext();
	async function handleTransaction() {
		const { contract } = selector.store.getState();
		const wallet = await selector.wallet();
		const transactions = [];
		/* wallet
			.signAndSendTransaction({
				contract: "ft_contract.testnet",
				signerId: accountId,
				actions: [
					{
						type: "FunctionCall",
						params: {
							methodName: method || "add_message",
							args: args || { message: "Hello World" },
							gas: gas || "100000000000000",
							deposit: deposit || "0",
						},
					},
				],
			})
			.catch((err) => {
							console.log(err);
			}); */
		transactions.push({
			signerId: accountId,
			receiverId: receiver || contract.contractId,
			actions: [
				{
					type: "FunctionCall",
					params: {
						methodName: method || "add_message",
						args: args || { message: "Hello World" },
						gas: gas || "100000000000000",
						deposit: deposit || "0",
					},
				},
			],
		});

		wallet.signAndSendTransactions({ transactions }).catch((err) => {
			console.log(err);
		});
	}

	return <StyledButton onClick={handleTransaction}>{children}</StyledButton>;
}
