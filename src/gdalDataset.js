import { callWorker } from './workerCommunication.js';

export default class GDALDataset {
    constructor(datasetPtr, filePath, directory, filename) {
        this.datasetPtr = datasetPtr;
        this.filePath = filePath;
        this.directory = directory;
        this.filename = filename;
    }

    close() {
        // Delete local data and then pass result / rejection along
        let deleteSelf = (val) => {
            delete this.datasetPtr;
            delete this.filePath;
            delete this.directory;
            delete this.filename;
            return val;
        };

        return callWorker('GDALClose', [this.datasetPtr, this.directory])
            .then(deleteSelf, deleteSelf);
    }

    count() {
        return callWorker('GDALGetRasterCount', [this.datasetPtr]);
    }

    width() {
        return callWorker('GDALGetRasterXSize', [this.datasetPtr]);
    }

    height() {
        return callWorker('GDALGetRasterYSize', [this.datasetPtr]);
    }

    wkt() {
        return callWorker('GDALGetProjectionRef', [this.datasetPtr]);
    }

    transform() {
        return callWorker('GDALGetGeoTransform', [this.datasetPtr]);
    }
}
