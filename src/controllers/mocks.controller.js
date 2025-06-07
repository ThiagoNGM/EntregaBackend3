import mocksService from '../services/mocks.services.js';

const getMocksUsers = (req, res) => {
  const count = parseInt(req.query.count) || 50;
  const users = mocksService.generateMocksUsers(count);
  res.json({ status: 'success', users });
};

const generateMockData = async (req, res) => {
  try {
    const { users, pets } = req.body;
    const result = await mocksService.insertMockData(users, pets);
    res.json(result);
  } catch (error) {
    res.status(500).json({ status: 'error', error: error.message });
  }
};

export default {
  getMocksUsers,
  generateMockData
};
