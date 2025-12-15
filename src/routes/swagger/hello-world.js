/**
 * @swagger
 * components:
 *   schemas:
 *     HelloWorldResponse:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           example: Hello World!
 *         timestamp:
 *           type: string
 *           format: date-time
 *           example: 2024-01-01T00:00:00.000Z
 */

/**
 * @swagger
 * /api/hello-world:
 *   get:
 *     summary: Hello World endpoint
 *     description: Contoh endpoint sederhana yang mengembalikan pesan Hello World
 *     tags: [Hello World]
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/HelloWorldResponse'
 */

