import express from 'express';
import lastKillsRouter from './routes/lastkills';
import chalk from 'chalk';

const app = express();
const port = process.env.PORT || 3000;

app.use('/lastkills', lastKillsRouter);

app.listen(port, () => {
  console.clear();
  console.log(chalk.bgHex('#222').hex('#00FF99').bold('╔════════════════════════════════════════════════════════╗'));
  console.log(chalk.bgHex('#222').hex('#00FF99').bold('║   Baiak-Zika Death Monitor API - Backend Iniciado!    ║'));
  console.log(chalk.bgHex('#222').hex('#00FF99').bold('╠════════════════════════════════════════════════════════╣'));
  console.log(chalk.bgHex('#222').hex('#00FF99')(`║  ➤ Porta: ${port}                                    ║`));
  console.log(chalk.bgHex('#222').hex('#00FF99')('║  ➤ Endpoint: /lastkills                             ║'));
  console.log(chalk.bgHex('#222').hex('#00FF99')('║  ➤ Status: Online                                   ║'));
  console.log(chalk.bgHex('#222').hex('#00FF99').bold('╚════════════════════════════════════════════════════════╝'));
});
