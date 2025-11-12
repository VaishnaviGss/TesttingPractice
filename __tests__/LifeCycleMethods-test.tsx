import { Alert } from "react-native";
jest.spyOn(Alert, "alert");
describe("Jest Lifecycle Hooks Demo", () => {
  let testCounter = 0;
  let sharedData: any = {};
  beforeAll(() => {
    console.log("Before All : Setting up test suite");
    sharedData.starttime = Date.now();
    sharedData.database = "connected to test database";
    sharedData.isLoggedIn = false;
    console.log("   Database connected, inital setup complete");
  });
  beforeEach(() => {
    testCounter++;
    console.log("Before Each : Test #", testCounter, +"starting");
    jest.clearAllMocks();
    sharedData.currentUser = null;
    sharedData.isLoggedIn = false;
    console.log(`   Mocks cleared, state reset for test #${testCounter}`);
  });
  afterEach(() => {
    console.log(`🟧 AFTER EACH: Test #${testCounter} completed`);

    // Cleanup any side effects from the test
    sharedData.lastTestResult = "completed";
    sharedData.isLoggedIn = false;
    console.log(`   Test #${testCounter} cleanup completed`);
  });
  afterAll(() => {
    console.log("🟥 AFTER ALL: Tearing down test suite");
    const endTime = Date.now();
    const duration = endTime - sharedData.startTime;

    console.log(`   All tests completed in ${duration}ms`);
    console.log("   Database disconnected, cleanup complete");

    // Cleanup shared resources
    sharedData = {};
  });
  it("Test 1: Basic functionality", () => {
    console.log("   ✅ Running Test 1");
    expect(sharedData.database).toBe("connected to test database");
    expect(sharedData.isLoggedIn).toBe(false);
  });

  // Test 2
  it("Test 2: Login simulation", () => {
    console.log("   ✅ Running Test 2");
    sharedData.currentUser = "testuser";
    sharedData.isLoggedIn = true;

    expect(sharedData.currentUser).toBe("testuser");
    expect(sharedData.isLoggedIn).toBe(true);
  });

  // Test 3
  it("Test 3: State should be reset", () => {
    console.log("   ✅ Running Test 3");
    // This should be reset by beforeEach
    expect(sharedData.currentUser).toBe(null);
    expect(sharedData.isLoggedIn).toBe(false);
  });
});
