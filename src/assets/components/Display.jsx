import { useSelector } from "react-redux";

export default function Display()
{
    const displayContent = useSelector(state => state.displayContent)
    return (
        <div className="mb-4 p-4 bg-grey-800 text-right text-5xl text-white rounded-lg">
            {displayContent}
        </div>
    );
}