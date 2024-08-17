import { BarChart, Bar, XAxis, YAxis, Tooltip ,CartesianGrid} from 'recharts';
const data = [{ name: 'Educated', uv: 400 },
    { name: 'The Silent Patient', uv: 400, color: '#8884d8' },
    { name: 'Becoming', uv: 300, color: '#82ca9d' },
    { name: 'Midnight Library', uv: 200, color: '#ffc658' },
    { name: 'Crawdads Sing', uv: 278, color: '#d0ed57' },
    { name: 'Atomic Habits', uv: 189, color: '#a4de6c' },    
    { name: 'The Alchemist', uv: 200, color: '#ffc658' },
]

const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
    return (
        <path
            d={`M${x},${y + height} L${x + width / 2},${y} L${x + width},${y + height} Z`}
            fill={fill}
        />
    );
};

function CustomTooltip({payload, active}) {
    if (active) {
        return (
            <div className="custom-tooltip">
                <p className="desc">total Page : {`${payload[0].value}`}</p>
            </div>
        );
    }

    return null;
}

const PagesToRead = () => {
    return (
     <div className='rounded-3xl p-7 bg-slate-100'>
          <div className='flex flex-col justify-center items-center mt-8 '>
            <BarChart width={600} height={300} data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <Tooltip content={<CustomTooltip />} />
                {data.map((entry, index) => (
                    <Bar
                        key={`bar-${index}`}
                        dataKey="uv"
                        fill={entry.color}
                        shape={<TriangleBar />}
                        isAnimationActive={false}
                    />
                ))}
            </BarChart>
        </div>
     </div>

    );
};

export default PagesToRead;