describe("test", function() {
  beforeEach(function (done) {
     Router.go('/');
     Tracker.afterFlush(done);
     done();
  });

  beforeEach(waitForRouter);

  it("reports", function(){
  });
});
