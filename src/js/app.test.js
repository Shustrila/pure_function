const app = require("./app");

describe("app", () => {

	test("health check healthy", () =>{
		let health = app({name: 'Маг', health: 90});

		expect(health).toBe("healthy");
	});

	test("health check wounded", () =>{
		let health = app({name: 'Маг', health: 40});

		expect(health).toBe("wounded");
	});

	test("health check critical", () =>{
		let health = app({name: 'Маг', health: 10});

		expect(health).toBe("critical");
	});
});

