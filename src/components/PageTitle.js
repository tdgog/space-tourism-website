import { intAs2Char } from '../utils/Formatting';

export default function PageTitle({ number, children, className }) {
    return <div className={`flex flex-row w-full ${className}`}>
        <h5 className='font-barlow-cb mr-5 text-white/25'>{intAs2Char(number)}</h5>
        <h5 className='font-barlow-cr'>{children}</h5>
    </div>
}
