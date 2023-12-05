const { spinner, Progress: { Progress, cliProgress }} = require('../lib/main')

describe('Spinner Class', () => {
  let stubs

  beforeEach(() => {
    stubs = {
      add: sinon.stub(spinner.spinner, 'add'),
      update: sinon.stub(spinner.spinner, 'update'),
      succeed: sinon.stub(spinner.spinner, 'succeed'),
      fail: sinon.stub(spinner.spinner, 'fail')
    }
  })

  afterEach(() => {
    sinon.restore()
  })

  describe('start method', () => {
    it('should call add with correct parameters', () => {
      spinner.start('loading', 'blue')
      expect(stubs.add.calledWith(spinner.id, sinon.match({ text: 'loading', color: 'blue' }))).to.be.true
    })
  })

  describe('update method', () => {
    it('should call update with correct parameters', () => {
      spinner.update('updating', 'red')
      expect(stubs.update.calledWith(spinner.id, sinon.match({ text: 'updating', color: 'red' }))).to.be.true
    })
  })

  describe('succeed method', () => {
    it('should call succeed with correct parameters', () => {
      spinner.succeed('success', 'green')
      expect(stubs.succeed.calledWith(spinner.id, sinon.match({ text: 'success', succeedColor: 'green' }))).to.be.true
    })
  })

  describe('fail method', () => {
    it('should call fail with correct parameters', () => {
      spinner.fail('failure', 'red')
      expect(stubs.fail.calledWith(spinner.id, sinon.match({ text: 'failure', failColor: 'red' }))).to.be.true
    })
  })
})

describe('Progress Class', () => {
  let progress, singleBarStub, options

  beforeEach(() => {
    singleBarStub = sinon.createStubInstance(cliProgress.SingleBar)
    sinon.stub(cliProgress, 'SingleBar').returns(singleBarStub)
    options = {
      etaBuffer: 2,
      clearOnComplete: false,
      preset: 'shades_classic',
      total: 100
    }
    progress = new Progress(options)
  })

  afterEach(() => {
    sinon.restore()
  })

  describe('constructor', () => {
    it('should initialize with the correct options', () => {
      expect(progress.total).to.equal(100)
      expect(cliProgress.SingleBar.calledWith(sinon.match(options), sinon.match.any)).to.be.true
    })
  })

  describe('start method', () => {
    it('should call start on SingleBar instance', () => {
      progress.start(10)
      expect(singleBarStub.start.calledWith(100, 10)).to.be.true
    })
  })

  describe('increment method', () => {
    it('should call increment on SingleBar instance', () => {
      progress.increment(5, { additionalData: 'test' })
      expect(singleBarStub.increment.calledWith(5, sinon.match({ additionalData: 'test' }))).to.be.true
    })
  })

  describe('update method', () => {
    it('should call update on SingleBar instance', () => {
      progress.update(50, { additionalData: 'test' })
      expect(singleBarStub.update.calledWith(50, sinon.match({ additionalData: 'test' }))).to.be.true
    })
  })

  describe('updateETA method', () => {
    it('should call updateETA on SingleBar instance', () => {
      progress.updateETA()
      expect(singleBarStub.updateETA.calledOnce).to.be.true
    })
  })

  describe('setTotal method', () => {
    it('should call setTotal on SingleBar instance', () => {
      progress.setTotal(150)
      expect(singleBarStub.setTotal.calledWith(150)).to.be.true
    })
  })

  describe('stop method', () => {
    it('should call stop on SingleBar instance', () => {
      progress.stop()
      expect(singleBarStub.stop.calledOnce).to.be.true
      expect(singleBarStub.update.calledWith(100)).to.be.true // Verifying it updates to total value
    })
  })
})
