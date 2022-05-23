import { idGeneratorService } from "../application/idGeneratorService";

function idGeneratorAdapter() {
    return Math.floor(Math.random() * 10000000000000).toString();
}

export default idGeneratorAdapter as idGeneratorService;