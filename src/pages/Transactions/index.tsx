import {Header} from "../../components/Header";
import {Summary} from "../../components/Summary";
import {PriceHighLight, TransactionsContainer, TransactionTable} from "./styles.ts";
import {SearchForm} from "./components/SearchForm";
import {useContext} from "react";
import {TransactionsContext} from "../../contexts/TransactionsContext.tsx";


export function Transactions() {

    const {transactions} = useContext(TransactionsContext)

    return (
        <div>
            <Header/>
            <Summary/>
            <TransactionsContainer>
                <SearchForm/>
                <TransactionTable>
                    <tbody>
                    {transactions.map(transaction => {
                        return (
                            <tr key={transaction.id}>
                                <td width="50%">{transaction.description}</td>
                                <td><PriceHighLight variant={transaction.type}>{transaction.price}</PriceHighLight></td>
                                <td>{transaction.category}</td>
                                <td>{transaction.createdAt}</td>
                            </tr>
                        )
                    })}

                    </tbody>
                </TransactionTable>
            </TransactionsContainer>
        </div>
    )
}