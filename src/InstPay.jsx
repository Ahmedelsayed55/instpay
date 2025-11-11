import React, { useRef, useState } from "react";

const InstPay = () => {
  const [balance, setBalance] = useState(1000);
  const [showBalance, setShowBalance] = useState(false);
  const [deposit, setDeposit] = useState(false);
  const [withdraw, setWithdraw] = useState(false);
  const [customAmount, setCustomAmount] = useState(false);
  let inputAmount = useRef();
  const [showHistory, setShowHistory] = useState(false);
  const [history, setHistory] = useState([ JSON.parse(localStorage.getItem("history")) || []]);
 let handleDeleteHistory = (index) => {
    let newHistory = history.filter((item, i) => i !== index);
    setHistory(newHistory);
    localStorage.setItem("history", JSON.stringify(newHistory));
 }
  let showDeposit = () => {
    if (deposit === false) {
      setDeposit(true);
      setWithdraw(false);
    } else {
      setDeposit(false);
    }
  };
  let showWithdraw = () => {
    if (withdraw === false) {
      setWithdraw(true);
      setDeposit(false);
    } else {
      setWithdraw(false);
    }
  };

  let handleCustomAmountDeposit = () => {
    let newDeposit = +inputAmount.current.value;
    let newBalance = balance + newDeposit;
    setBalance(newBalance);
    let newHistory = [...history, { type: "deposit", amount: newDeposit, date: new Date().toISOString().split("T")[0] },
    ];
    setHistory(newHistory);
    inputAmount.current.value = "";
    localStorage.setItem("balance", newBalance);
    localStorage.setItem("history", JSON.stringify(newHistory));
  };
  let handleCustomAmountWithdraw = () => {
    let newWithdraw = +inputAmount.current.value;
    let newBalance = balance - newWithdraw;
    setBalance(newBalance);
    let newHistory = [...history, { type: "withdraw", amount: newWithdraw, date: new Date().toISOString().split("T")[0] },
    ];
    setHistory(newHistory);
    inputAmount.current.value = "";
    localStorage.setItem("balance", newBalance);
    localStorage.setItem("history", JSON.stringify(newHistory));
  };
  return (
    <div>
      <div className="container mx-auto p-4 flex flex-col gap-6 items-center">
        <h1 className="text-2xl font-bold text-center">
          Your Balance is :$ {showBalance ? balance : "*****"}{" "}
        </h1>
        <div className="flex gap-4">
          <button
            className="btn btn-primary"
            onClick={() => setShowBalance(!showBalance)}
          >
            {showBalance ? "Hide Balance" : "Show Balance"}
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => setShowHistory(!showHistory)}
          >
            {showHistory ? "Hide History" : "Show History"}
          </button>
        </div>
        {
          /* buttons for deposit and withdraw */
          showBalance && (
            <div className="flex w-full justify-center gap-6 ">
              <button className="btn btn-success" onClick={showDeposit}>
                Deposit
              </button>
              <button className="btn btn-error" onClick={showWithdraw}>
                Withdraw
              </button>
            </div>
          )
        }
        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}
        {/* here code for deposit  */}
        {deposit && showBalance && (
          <div className="w-full flex flex-col gap-4 items-center">
            <div className="flex flex-col gap-5">
              <div className="grid grid-cols-3  gap-3">
                <button
                  className="btn btn-success"
                  onClick={() => {
                    setBalance(balance + 200);
                  }}
                >
                  200
                </button>
                <button
                  className="btn btn-success"
                  onClick={() => {
                    setBalance(balance + 500);
                  }}
                >
                  500
                </button>
                <button
                  className="btn btn-success"
                  onClick={() => {
                    setBalance(balance + 1000);
                  }}
                >
                  1000
                </button>
                <button
                  className="btn btn-success"
                  onClick={() => {
                    setBalance(balance + 2000);
                  }}
                >
                  2000
                </button>
                <button
                  className="btn btn-success"
                  onClick={() => {
                    setBalance(balance + 3000);
                  }}
                >
                  3000
                </button>
                <button
                  className="btn btn-success"
                  onClick={() => {
                    setBalance(balance + 5000);
                  }}
                >
                  5000
                </button>
              </div>
              <div className="flex w-full flex-col gap-3">
                <button
                  className="btn btn-warning"
                  onClick={() => setCustomAmount(!customAmount)}
                >
                  Custom Amount
                </button>
                {customAmount && (
                  <div className="flex flex-col gap-2">
                    <input
                      ref={inputAmount}
                      type="text"
                      className="input input-bordered w-full "
                      placeholder="Enter Your Custom Balance"
                    />
                    <button
                      className="btn btn-warning w-full"
                      onClick={handleCustomAmountDeposit}
                    >
                      Deposit
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}
        {/* here code for withdraw  */}
        {withdraw && showBalance && (
          <div className="w-full flex flex-col gap-4 items-center">
            <div className="flex flex-col gap-5">
              <div className="grid grid-cols-3  gap-3">
                <button
                  className="btn btn-error"
                  onClick={() => {
                    balance >= 200
                      ? setBalance(balance - 200)
                      : alert(
                          "صعبت عليا استني خد الجنيه دا ومتخليش حد يكلمك كدا تاني "
                        );
                  }}
                >
                  200
                </button>
                <button
                  className="btn btn-error"
                  onClick={() => {
                    balance >= 500
                      ? setBalance(balance - 500)
                      : alert("يلا ياكحيان مفيش معاك فلوس تكفي");
                  }}
                >
                  500
                </button>
                <button
                  className="btn btn-error"
                  onClick={() => {
                    balance >= 1000
                      ? setBalance(balance - 1000)
                      : alert("شوفلك شغلانه يافقير");
                  }}
                >
                  1000
                </button>
                <button
                  className="btn btn-error"
                  onClick={() => {
                    balance >= 2000
                      ? setBalance(balance - 2000)
                      : alert("مش معاك يكمل يافقير");
                  }}
                >
                  2000
                </button>
                <button
                  className="btn btn-error"
                  onClick={() => {
                    balance >= 3000
                      ? setBalance(balance - 3000)
                      : alert(" انت فقير ياه");
                  }}
                >
                  3000
                </button>
                <button
                  className="btn btn-error"
                  onClick={() => {
                    balance >= 5000
                      ? setBalance(balance - 5000)
                      : alert("مش معاك يكمل يامعلم");
                  }}
                >
                  5000
                </button>
              </div>
              <div className="flex w-full flex-col gap-3">
                <button
                  className="btn btn-warning"
                  onClick={() => setCustomAmount(!customAmount)}
                >
                  Custom Amount
                </button>
                {customAmount && (
                  <div className="flex flex-col gap-2">
                    <input
                      ref={inputAmount}
                      type="text"
                      className="input input-bordered w-full "
                      placeholder="Enter Your Custom Balance"
                    />
                    <button className="btn btn-error w-full " onClick={handleCustomAmountWithdraw}>WithDraw</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        {/*  */}
        {/*  */}
        {/*  */}
        {/* here code for history */}
        {showHistory &&
          (history.length > 0 ? (
            <table className="table table-zebra w-full mt-6">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Type</th>
                  <th>Amount</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {
                  history.map((item,index)=>{
                    return(
                      <tr key={index}>
                      <th>{index + 1}</th>
                      <td className={`font-bold ${item.type == "deposit" ? "text-green-600" : "text-red-600"}`}>{item.type}</td>
                      <td>{item.amount +"EGP"}</td>
                      <td>{item.date}</td>
                      <td><button className="btn  cursor-pointer" onClick={() => handleDeleteHistory(index)}>❌</button></td>
                    </tr>
                    )
                  })
                }
              </tbody>
            </table>
          ) : (
            <h1 className="text-2xl text-red-700 font-bold">No History Found ❌ ❌</h1>
          ))}
      </div>
    </div>
  );
};

export default InstPay;
