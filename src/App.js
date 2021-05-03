import "./App.css";
import { Bar } from "react-chartjs-2";
import { useState } from "react";

function App() {
    const data = [
        {
            name: "Adam",
            age: 20,
            salary: 30100,
        },
        {
            name: "Bob",
            age: 60,
            salary: 102000,
        },
        {
            name: "Carla",
            age: 31,
            salary: 57000,
        },
        {
            name: "Dave",
            age: 42,
            salary: 22000,
        },
        {
            name: "Ethel",
            age: 80,
            salary: 91000,
        },
        {
            name: "Frank",
            age: 28,
            salary: 73000,
        },
        {
            name: "Gina",
            age: 21,
            salary: 16000,
        },
    ];

    const [chart, setChart] = useState("Age");
    const [ageData, setAgeData] = useState(data);
    const [salaryData, setSalaryData] = useState(data);

    function compareAge(a, b) {
        if (a.age > b.age) {
            return -1;
        }
        if (a.age < b.age) {
            return 1;
        }
        return 0;
    }

    function compareSalary(a, b) {
        if (a.salary > b.salary) {
            return -1;
        }
        if (a.salary < b.salary) {
            return 1;
        }
        return 0;
    }

    const getAgeNames = () => {
        ageData.sort(compareAge);
        return ageData.map((d) => {
            return d.name;
        });
    };

    const getAges = () => {
        return ageData.map((d) => {
            return d.age;
        });
    };

    const getSalaryNames = () => {
        salaryData.sort(compareSalary);
        return salaryData.map((d) => {
            return d.name;
        });
    };

    const getSalaries = () => {
        return salaryData.map((d) => {
            return d.salary;
        });
    };

    const getAgeData = {
        labels: getAgeNames(),
        datasets: [
            {
                label: "Age",
                backgroundColor: "#61dafb",
                borderColor: "white",
                data: getAges(),
            },
        ],
    };

    const getSalaryData = {
        labels: getSalaryNames(),
        datasets: [
            {
                label: "Salary",
                backgroundColor: "#61dafb",
                borderColor: "white",
                data: getSalaries(),
            },
        ],
    };

    const options = {
        indexAxis: "y",
    };

    const chartChange = (e) => {
        setChart(e.target.value);
    };

    const getAgeStats = () => {
        ageData.sort(compareAge);
        return ageData[0].name;
    };

    const getSalaryStats = () => {
        salaryData.sort(compareSalary);
        return salaryData[0].name;
    };

    return (
        <div className="App">
            <header className="App-header">
                <select id="type" onChange={chartChange}>
                    <option>Age</option>
                    <option>Salary</option>
                </select>
                {chart === "Age" ? (
                    <>
                        <div className="age">
                            <Bar data={getAgeData} options={options} height={450} width={900}></Bar>
                            <h3>Oldest: {getAgeStats()}</h3>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="age">
                            <Bar data={getSalaryData} options={options} height={450} width={900}></Bar>
                            <h3>Highest Salary: {getSalaryStats()}</h3>
                        </div>
                    </>
                )}
            </header>
        </div>
    );
}

export default App;
