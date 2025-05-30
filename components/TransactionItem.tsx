type TransactionProps = {
  icon: string;
  type: string;
  date: string;
  status: 'Успешен' | 'Отклонен';
  sum: number;
  number: string;
  kind: string;
};

export const TransactionItem = ({
  icon,
  type,
  date,
  status,
  sum,
  number,
  kind,
}: TransactionProps) => {
  return (
    <div className="flex justify-between items-center p-4 border border-neutral-700 rounded-lg bg-neutral-900">
      <div className="flex items-center gap-3">
        <img src={icon} alt={type} className="w-8 h-8" />
        <div>
          <p className="font-semibold">{kind} переводом на {type}</p>
          <p className="text-sm text-neutral-400">{date}</p>
          <p className="text-xs text-neutral-500">№ транзакции {number}</p>
        </div>
      </div>
      <div className="text-right">
        <p className={\`text-sm font-semibold \${status === 'Успешен' ? 'text-green-400' : 'text-red-500'}\`}>
          {status}
        </p>
        <p className="text-base">+{sum.toLocaleString()} ₽</p>
      </div>
    </div>
  );
};
