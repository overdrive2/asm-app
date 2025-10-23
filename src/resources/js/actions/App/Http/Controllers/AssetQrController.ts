import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\AssetQrController::batchPdf
 * @see app/Http/Controllers/AssetQrController.php:19
 * @route '/assets/qr/batch-pdf'
 */
export const batchPdf = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: batchPdf.url(options),
    method: 'post',
})

batchPdf.definition = {
    methods: ["post"],
    url: '/assets/qr/batch-pdf',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AssetQrController::batchPdf
 * @see app/Http/Controllers/AssetQrController.php:19
 * @route '/assets/qr/batch-pdf'
 */
batchPdf.url = (options?: RouteQueryOptions) => {
    return batchPdf.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AssetQrController::batchPdf
 * @see app/Http/Controllers/AssetQrController.php:19
 * @route '/assets/qr/batch-pdf'
 */
batchPdf.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: batchPdf.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\AssetQrController::batchPdf
 * @see app/Http/Controllers/AssetQrController.php:19
 * @route '/assets/qr/batch-pdf'
 */
    const batchPdfForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: batchPdf.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AssetQrController::batchPdf
 * @see app/Http/Controllers/AssetQrController.php:19
 * @route '/assets/qr/batch-pdf'
 */
        batchPdfForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: batchPdf.url(options),
            method: 'post',
        })
    
    batchPdf.form = batchPdfForm
const AssetQrController = { batchPdf }

export default AssetQrController