const Logger = require ('./logger.js')

const dbLogger = new Logger('DB')
dbLogger.info('Prueba de mensaje')

const accessLogger = new Logger('ACCESS')
accessLogger.verbose('Verbose')