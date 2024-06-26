
function FunctionParenthesisAndParameters () {
    const square = (a: number) => a * a;
    const plusOne = (a: number) => a + 1;
    const twoSquared = square(2);
    const threePlusOne = plusOne(3);

    return (
        <>
            <h2>Parenthesis and Parameters</h2>
            twoSquared = {twoSquared} <br />
            squared = {twoSquared} <br />
            threePlusOne = {threePlusOne} <br />
            plusOne(3) = {threePlusOne}
        </>
    );
}

export default FunctionParenthesisAndParameters;