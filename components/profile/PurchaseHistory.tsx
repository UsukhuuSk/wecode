import { Invoice01Icon } from "@hugeicons/react";

export default function PurchaseHistory() {
  const purchases = [
    {
      id: 1,
      title: "AI for All course",
      time: "12:36",
      amount: 123000,
    },
    {
      id: 2,
      title: "AI for All course",
      time: "12:36",
      amount: 123000,
    },
    {
      id: 3,
      title: "AI for All course",
      time: "12:36",
      amount: 123000,
    },
  ];

  return (
    <div className="w-full text-white bg-[#33415566] py-6 px-8 rounded-xl border border-[#40404787]">
      <div className="mx-auto rounded-3xl p-8 flex flex-col gap-8 backdrop-blur-sm">
        <h1 className="text-[20px] font-adineue font-bold">Purchase history</h1>
        <div className="space-y-6">
          {purchases.map((purchase) => (
            <div
              key={purchase.id}
              className="flex flex-col md:flex-row  items-start md:items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20">
                  <Invoice01Icon size={20} color={"#22C55E"} variant={"bulk"} />
                </div>
                <div>
                  <h2 className="text-lg font-medium text-white">
                    {purchase.title}
                  </h2>
                  <p className="text-sm text-gray-400">{purchase.time}</p>
                </div>
              </div>
              <p className="text-lg font-medium text-emerald-500">
                {purchase.amount.toLocaleString()}₮
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
