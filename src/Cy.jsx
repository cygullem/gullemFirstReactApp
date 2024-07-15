
const Cy = () => {

    const resetCount = () => {
        count = 0;
    }

    return (
        <p className="subtitle" onClick={resetCount}>Author: Cy</p>
    );
}
 
export default Cy;