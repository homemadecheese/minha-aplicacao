function Tabela() {
    return (
        <div className="container">
            <div className="table-responsive d-flex justify-content-center">
                <table className="table table-bordered table-striped table-hover shadow text-center w-auto">
                    <thead className="table-dark">
                        <tr>
                            <th>Nome</th>
                            <th>Idade</th>
                            <th>CPF</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Gustavo</td>
                            <td>21</td>
                            <td>123.456.789-00</td>
                        </tr>
                        <tr>
                            <td>Reinaldo</td>
                            <td>21</td>
                            <td>143.423.798-00</td>
                        </tr>
                        <tr>
                            <td>Jorge</td>
                            <td>23</td>
                            <td>120.452.759-00</td>
                        </tr>
                        <tr>
                            <td>Maria</td>
                            <td>29</td>
                            <td>108.356.089-00</td>
                        </tr>
                        <tr>
                            <td>Roberto</td>
                            <td>45</td>
                            <td>183.452.759-00</td>
                        </tr>
                        <tr>
                            <td>Marcos</td>
                            <td>67</td>
                            <td>343.406.139-00</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Tabela;
