import express from "express"
import { endpointBusqueda, endpointId } from "../controllers/endpointController"

const router = express.Router()

router.get("/items", endpointBusqueda)

router.get("/items/:id", endpointId)

export { router }