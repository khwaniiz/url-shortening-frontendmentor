import React, { useState } from 'react';
import axios from 'axios'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FormContainer, Form, FormInput, ButtonContainer, ErrorText, ResultContainer, OriginalLinkContainer, ResultLinkContainer, ShortUrlContainer } from './shortenUrlForm.styles'
import { Button } from '../../globalStyles'

const ShortenUrlForm = () => {

    const [longUrl, setLongUrl] = useState('')
    const [shortUrl, setShortUrl] = useState('')
    const [copied, setCopied] = useState(false)
    const [error, setError] = useState(false)

    const apiLink = `https://api.shrtco.de/v2/shorten?url=${longUrl}`;

    const onFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios({
                method: 'get',
                url: apiLink,
                headers: {
                    'Content-Type': 'application/json',
                }
            })

            const result = res.data.result.full_short_link;
            console.log('result', result)
            setShortUrl(result)


        } catch (error) {
            console.log(`Error getting shortUrl from API ${error}`)
            setError(true)
        }

    }

    const onCopy = (e) => {
        setCopied(!copied);
    }


    const errorText = () => (
        <ErrorText>Please add alink</ErrorText>
    )

    const copyLinkButton = () => (
        <CopyToClipboard text={shortUrl}
            onCopy={e => onCopy(e)}>
            <Button style={{ marginLeft: "auto", background: `${!copied ? "hsl(180, 66%, 49%)" : "hsl(260, 8%, 14%)"}` }}>{copied ? "Copied!" : "Copy"}</Button>
        </CopyToClipboard>
    )

    const linkResult = () => (
        <ResultContainer>
            <OriginalLinkContainer>
                {longUrl}
            </OriginalLinkContainer>
            <ResultLinkContainer>
                <ShortUrlContainer>{shortUrl}</ShortUrlContainer>
                {copyLinkButton()}
            </ResultLinkContainer>
        </ResultContainer>
    )

    return (

        <>
            <FormContainer>
                <Form onSubmit={onFormSubmit}>
                    <FormInput
                        error={error}
                        type="text"
                        placeholder="Shorten a link here..."
                        value={longUrl}
                        onChange={e => setLongUrl(e.target.value)}
                    />
                    <ButtonContainer><Button square type="submit">Shorten it!</Button></ButtonContainer>
                </Form>
                {error && errorText()}
            </FormContainer>
            {/* {!error && longUrl && shortUrl && linkResult()} */}
            {!error && linkResult()}
        </>
    )
}

export default ShortenUrlForm;