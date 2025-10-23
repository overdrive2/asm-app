import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\AssetQrController::pdf
 * @see app/Http/Controllers/AssetQrController.php:19
 * @route '/assets/qr/batch-pdf'
 */
export const pdf = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: pdf.url(options),
    method: 'post',
})

pdf.definition = {
    methods: ["post"],
    url: '/assets/qr/batch-pdf',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AssetQrController::pdf
 * @see app/Http/Controllers/AssetQrController.php:19
 * @route '/assets/qr/batch-pdf'
 */
pdf.url = (options?: RouteQueryOptions) => {
    return pdf.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AssetQrController::pdf
 * @see app/Http/Controllers/AssetQrController.php:19
 * @route '/assets/qr/batch-pdf'
 */
pdf.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: pdf.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\AssetQrController::pdf
 * @see app/Http/Controllers/AssetQrController.php:19
 * @route '/assets/qr/batch-pdf'
 */
    const pdfForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: pdf.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AssetQrController::pdf
 * @see app/Http/Controllers/AssetQrController.php:19
 * @route '/assets/qr/batch-pdf'
 */
        pdfForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: pdf.url(options),
            method: 'post',
        })
    
    pdf.form = pdfForm
const batch = {
    pdf: Object.assign(pdf, pdf),
}

export default batch