if(key == 'Time Series (Daily)')
                            {
                                console.log(`${key} ye key hai`);
                                for(y in emp1.key)
                                {
                                    console.log(`${emp1.key.y} ye date hai`);
                                    for(x in y)
                                    {
                                        if(x == '1. open')
                                        {
                                            open.push(emp1.key.y.x);
                                            console.log(open[i-1]);
                                        }
                                        else if(x == '2. high')
                                        {
                                            high.push(emp1.key.y.x);
                                            console.log(high[i-1]);
                                        }
                                        else if(key == '3. low')
                                        {
                                            low.push(emp1.key.y.x);
                                            console.log(low[i-1]);
                                        }
                                        else if(key == '4. close')
                                        {
                                            close.push(emp1.key.y.x);
                                            console.log(close[i-1]);
                                        }
                                        else
                                        {
                                        
                                        }

                                    }
                                    
                                }
                                

                            }
                            else
                            {
                                console.log('no data Found');
                            }
                            